import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() weatherGroup: number;
  @Input() dayTime: string;

  imgPath: string;

  constructor() { }

  ngOnInit(){}

  ngOnChanges() {
    if(this.weatherGroup >= 200 && this.weatherGroup < 300)
    {
      this.imgPath = './assets/weather/Lightning.png';
    }
    else if(this.weatherGroup >= 300 && this.weatherGroup < 500)
    {
      this.imgPath = './assets/weather/Rain with Clouds.png';
    }
    else if(this.weatherGroup >= 500 && this.weatherGroup < 600)
    {
      this.imgPath = './assets/weather/Rain.png';
    }
    else if(this.weatherGroup >= 600 && this.weatherGroup < 700)
    {
      this.imgPath = './assets/weather/Snow.png';
    }
    else if(this.weatherGroup >= 700 && this.weatherGroup < 800)
    {
      this.imgPath = './assets/weather/Cloud.png';
    }
    else if(this.weatherGroup === 800)
    {
      if(this.dayTime === '01d')
      {
        this.imgPath = './assets/weather/Lighter Heat.png';
      }
      else
      {
        this.imgPath = './assets/weather/Moon.png';
      }
    }
    else if(this.weatherGroup > 800)
    {
      this.imgPath = './assets/weather/Cloud.png';
    }
  }

}
