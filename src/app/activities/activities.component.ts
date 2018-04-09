import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CampaignService } from '../Services/campaign.service';
import { campaignPreview, Item } from '../Models/campaign-preview.model';
import { Router } from '@angular/router';


declare var $:any;

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html'
})
export class ActivitiesComponent{

  campaignPreview:campaignPreview;
  campaigns: Item[];

  constructor(private campaignService:CampaignService,private router: Router ) { }

  delete(id: HTMLInputElement) {
    this.campaignService.deleteCampaign(id);
    this.router.navigate(['campaign']);
  }

  public ngOnInit() {
    this.campaignService.allCampaign()
    .subscribe((res: any) => {
      this.campaignPreview = res;
      this.campaigns = res.result.items;
    });
    }
}