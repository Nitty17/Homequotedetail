import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
// import { WebStorageService } from '../../../services/web-storage.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements AfterViewInit, OnInit {
  autocompleteInput: string;
  finalAddress: string;
  @Input() adressType: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addressText', { static: false }) addressText: any;

  constructor(private mapsAPILoader: MapsAPILoader) { }

  ngAfterViewInit() {
    this.mapsAPILoader.load().then(() => {
      this.getPlaceAutocomplete();
    });
  }

  ngOnInit(): void {
    console.log("TCL: AddressComponent -> constructor -> ngOnInit", this.autocompleteInput);
    // this.autocompleteInput = this.webStorageService.getFromLocalStorage('addressLine1');
  }

  // storeValueToLocalStorage(event) {
  //   const addressLine1 = event.target.value;
  //   this.finalAddress = addressLine1;
  //   this.webStorageService.saveToLocalStorage('addressLine1', addressLine1);
  // }

  private getPlaceAutocomplete() {
    const autocomplete = new window['google'].maps.places.Autocomplete(this.addressText.nativeElement,
      {
        componentRestrictions: { country: 'US' },
        types: [this.adressType],
        fields: ['address_components']
      });
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      this.invokeEvent(place);
    });
  }

  invokeEvent(place: any) {
    this.setAddress.emit(place);
  }
}
