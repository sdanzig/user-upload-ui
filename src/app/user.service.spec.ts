import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a file upload request', () => {
    const mockFile = new File([''], 'filename.csv');
    service.uploadFile(mockFile).subscribe();
    
    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('POST');
    req.flush({});
  });
});
