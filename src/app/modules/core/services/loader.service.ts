import { Injectable } from '@angular/core';
import { LoadingController, LoadingOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public loadingElement: HTMLIonLoadingElement = null;

  constructor(private loadingCtrl: LoadingController) { };

  public async showLoader(loadingOptions?: LoadingOptions): Promise<boolean> {
    // never returning a rejected promise here since I'll be using it an interceptor and I
    // don't want it to screw anything up
    try {
      if (this.loadingElement) {
        this.loadingElement = null;
      }

      this.loadingElement = loadingOptions ?
      await this.loadingCtrl.create(loadingOptions) :
      await this.loadingCtrl.create();

      await this.loadingElement.present();
      return Promise.resolve(true);
    } catch (error) {
      console.log('error', error);
      return Promise.resolve(false);
    }
  }

  public async hideLoader(): Promise<boolean> {
    try {
      if (this.loadingElement) {
        this.loadingElement.dismiss?.();
      }
      return Promise.resolve(true);
    } catch (error) {
      console.log('error', error);
      return Promise.resolve(false);
    }
  };
}
