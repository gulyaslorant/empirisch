import { Component } from "@angular/core";
import { MatStepperModule } from "@angular/material/stepper";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-stepper",
  standalone: true,
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
  imports: [
    CommonModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class StepperComponent {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  currentStep = 0;
  totalSteps = 2;

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [""],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [false],
    });
  }

  get progress(): number {
    const progressValue = (this.currentStep / this.totalSteps) * 100;
    return progressValue;
  }

  setStep(index: number): void {
    // Setze den currentStep direkt basierend auf dem Index
    this.currentStep = index;

    // Wenn der aktuelle Schritt gleich der Gesamtzahl der Schritte ist, setze den currentStep auf 0
    if (this.currentStep === this.totalSteps) {
      this.currentStep = 0;
    } else {
      this.currentStep = index + 1; // Setze den currentStep korrekt auf den nächsten Schritt
    }
  }

  reset(stepper: any): void {
    // Setzen des aktuellen Schritts auf den ersten Schritt
    this.currentStep = 0;
    // Zurücksetzen der Formulare
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    // Zurücksetzen des Steppers
    stepper.reset();

    // Optional: Verzögere das Setzen des Steppers auf den Startwert, um sicherzustellen,
    // dass der Reset korrekt verarbeitet wird
    setTimeout(() => {
      this.currentStep = 1; // Beginne nach dem Reset wieder beim ersten Schritt
    }, 0);
  }
}
