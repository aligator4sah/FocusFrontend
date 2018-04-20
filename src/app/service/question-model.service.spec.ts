import { TestBed, inject } from '@angular/core/testing';

import { QuestionModelService } from './question-model.service';

describe('QuestionModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionModelService]
    });
  });

  it('should be created', inject([QuestionModelService], (service: QuestionModelService) => {
    expect(service).toBeTruthy();
  }));
});
