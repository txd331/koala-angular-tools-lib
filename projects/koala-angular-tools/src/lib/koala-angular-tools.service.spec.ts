import { TestBed } from '@angular/core/testing';

import { KoalaAngularToolsService } from './koala-angular-tools.service';

describe('KoalaAngularToolsService', () => {
  let service: KoalaAngularToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KoalaAngularToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
