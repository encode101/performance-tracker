import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { CommonService } from 'src/app/shared/common-service/common.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
})
export class AddReviewComponent {
  @Output() saveForm: EventEmitter<any> = new EventEmitter();

  existingReviews: any; //existingReviewsInterface | undefined;

  constructor(private fb: FormBuilder, private cs: CommonService) {}
  addReviewForm = this.fb.group({
    id: [''],
    devId: ['', [Validators.required]],
    projectName: [''],
    codeOptimization: [''],
    esLintPassed: [''],
    patchProcess: [''],
    numberOfBugs: [0],
    bugSheetUrl: [''],
    qualityOfBugs: [''],
    bugsSeverity: [''],
    goodReview: [''],
    badReview: [''],
    gutFeeling: [''],
  });

  showValues() {
    this.addReviewForm.patchValue({ id: uuidv4() });
    console.log(this.addReviewForm.value);
    this.cs.addReviews(this.addReviewForm.value).subscribe((resp: any) => {
      this.existingReviews = resp.data;
      this.getExistingReviews();
    });
    this.saveForm.emit(this.addReviewForm.value);
  }

  getExistingReviews() {
    this.cs.getReviews().subscribe((resp: any) => {
      this.existingReviews = resp;
    });
  }

  deleteRecord(id: any) {
    this.cs.deleteReview(id.id);
    this.getExistingReviews();
  }
}
