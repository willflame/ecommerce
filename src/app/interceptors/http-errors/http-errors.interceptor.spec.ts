import {
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { httpErrorsInterceptor } from './http-errors.interceptor';

describe('httpErrorsInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let snackBar: MatSnackBar;

  // const interceptor: HttpInterceptorFn = (req, next) =>
  //   TestBed.runInInjectionContext(() => httpErrorsInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([httpErrorsInterceptor])),
        provideHttpClientTesting(),
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    snackBar = TestBed.inject(MatSnackBar);
  });

  it('should open notification on http error', () => {
    jest.spyOn(snackBar, 'open');
    httpClient.get('/test').subscribe();

    const request = httpMock.expectOne('/test');
    request.error(new ProgressEvent('error'));

    expect(snackBar.open).toHaveBeenCalled();
    expect(request.request.headers.has('x-access-token')).toBe(true);
  });
});
