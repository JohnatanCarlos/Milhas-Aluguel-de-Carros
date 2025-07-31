import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivationStart, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject } from 'rxjs';

import { TimesService } from './../../services/times.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {
  showLabelDevolution = true;
  disabledSearch = false;
  isOverlapSearch = false;

  formSearch: FormGroup;
  searchSubject = new Subject<string>();
  agencies: any = [];
  times$: Observable<any>;
  horariosLocacao = [
    {
      timeSpan: '00:00:00',
      exibicao: '00:00'
    },
    {
      timeSpan: '00:30:00',
      exibicao: '00:30'
    },
    {
      timeSpan: '01:00:00',
      exibicao: '01:00'
    },
    {
      timeSpan: '01:30:00',
      exibicao: '01:30'
    },
    {
      timeSpan: '02:00:00',
      exibicao: '02:00'
    },
    {
      timeSpan: '02:30:00',
      exibicao: '02:30'
    },
    {
      timeSpan: '03:00:00',
      exibicao: '03:00'
    },
    {
      timeSpan: '03:30:00',
      exibicao: '03:30'
    },
    {
      timeSpan: '04:00:00',
      exibicao: '04:00'
    },
    {
      timeSpan: '04:30:00',
      exibicao: '04:30'
    },
    {
      timeSpan: '05:00:00',
      exibicao: '05:00'
    },
    {
      timeSpan: '05:30:00',
      exibicao: '05:30'
    },
    {
      timeSpan: '06:00:00',
      exibicao: '06:00'
    },
    {
      timeSpan: '06:30:00',
      exibicao: '06:30'
    },
    {
      timeSpan: '07:00:00',
      exibicao: '07:00'
    },
    {
      timeSpan: '07:30:00',
      exibicao: '07:30'
    },
    {
      timeSpan: '08:00:00',
      exibicao: '08:00'
    },
    {
      timeSpan: '08:30:00',
      exibicao: '08:30'
    },
    {
      timeSpan: '09:00:00',
      exibicao: '09:00'
    },
    {
      timeSpan: '09:30:00',
      exibicao: '09:30'
    },
    {
      timeSpan: '10:00:00',
      exibicao: '10:00'
    },
    {
      timeSpan: '10:30:00',
      exibicao: '10:30'
    },
    {
      timeSpan: '11:00:00',
      exibicao: '11:00'
    },
    {
      timeSpan: '11:30:00',
      exibicao: '11:30'
    },
    {
      timeSpan: '12:00:00',
      exibicao: '12:00'
    },
    {
      timeSpan: '12:30:00',
      exibicao: '12:30'
    },
    {
      timeSpan: '13:00:00',
      exibicao: '13:00'
    },
    {
      timeSpan: '13:30:00',
      exibicao: '13:30'
    },
    {
      timeSpan: '14:00:00',
      exibicao: '14:00'
    },
    {
      timeSpan: '14:30:00',
      exibicao: '14:30'
    },
    {
      timeSpan: '15:00:00',
      exibicao: '15:00'
    },
    {
      timeSpan: '15:30:00',
      exibicao: '15:30'
    },
    {
      timeSpan: '16:00:00',
      exibicao: '16:00'
    },
    {
      timeSpan: '16:30:00',
      exibicao: '16:30'
    },
    {
      timeSpan: '17:00:00',
      exibicao: '17:00'
    },
    {
      timeSpan: '17:30:00',
      exibicao: '17:30'
    },
    {
      timeSpan: '18:00:00',
      exibicao: '18:00'
    },
    {
      timeSpan: '18:30:00',
      exibicao: '18:30'
    },
    {
      timeSpan: '19:00:00',
      exibicao: '19:00'
    },
    {
      timeSpan: '19:30:00',
      exibicao: '19:30'
    },
    {
      timeSpan: '20:00:00',
      exibicao: '20:00'
    },
    {
      timeSpan: '20:30:00',
      exibicao: '20:30'
    },
    {
      timeSpan: '21:00:00',
      exibicao: '21:00'
    },
    {
      timeSpan: '21:30:00',
      exibicao: '21:30'
    },
    {
      timeSpan: '22:00:00',
      exibicao: '22:00'
    },
    {
      timeSpan: '22:30:00',
      exibicao: '22:30'
    },
    {
      timeSpan: '23:00:00',
      exibicao: '23:00'
    },
    {
      timeSpan: '23:30:00',
      exibicao: '23:30'
    }
  ]

  constructor(
    private router: Router,
    private timesService: TimesService,
    private headerService: HeaderService,
    private formBuild: FormBuilder
  ) {
    router.events.subscribe((event: any) => {
      if (event instanceof ActivationStart) {
        // Recupera os valores passado na rota
        this.disabledSearch = event.snapshot.data.disabledSearch;
        this.isOverlapSearch = event.snapshot.data.overlapSearch;
        console.log(this.isOverlapSearch);
      }
    });
  }

  ngOnInit(): void {
    this.times$ = this.timesService.getTimesAvailableOfDay();

    this.formSearch = this.formBuild.group({
      agencyDeparture: [],
      agencyReturn: [],
      dateDeparture: [],
      dateReturn: [],
      time: [],
      isAgencyReturn: [true],
    });

    this.formSearch.get('agencyDeparture')?.valueChanges
      .pipe(debounceTime(1200), distinctUntilChanged())
      .subscribe((resultado) => {
        console.log(resultado);
        this.getAgency(resultado);
      });


  }

  displayFn(option: any): string {
    return option ? `${option.address.city} | ${option.name}` : '';
  }

  showHideLabelDevolution(showLabelDevolution: boolean) {
    this.showLabelDevolution = !showLabelDevolution;
  }

  getAgency(name: string) {
    if (name) {
      this.headerService.getAgencys(name).subscribe((res) => {
        this.agencies = res.body;
        console.log(this.agencies)
      });
    }
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchSubject.next(input.value); // Envia o valor do input ao Subject
  }

  // searchGroupVehicle(): void {
  //   // console.log(this.getFormParam());
  // }

  getFormParam(): any {
    return {
      userId: null,
      codeAgencyDepature: this.formSearch.get('agencyDeparture')?.value.code,
      codeAgencyReturn: this.formSearch.get('isAgencyReturn')?.value ? this.formSearch.get('agencyDeparture')?.value.code : this.formSearch.get('agencyReturn')?.value.code,
      dateDeparture: this.handleDate(this.formSearch.get('dateDeparture')?.value),
      dateReturn: this.handleDate(this.formSearch.get('dateReturn')?.value)
    }
  }


  handleDate(date: Date): string {
    return `${date.toISOString().split('T')[0]}T${this.formSearch.get('time')?.value.timeSpan}`;
  }
}


// {
//   userId
//   codeAgencyDepature
//   codeAgencyReturn
//   dateDeparture
//   dateReturn
// }
