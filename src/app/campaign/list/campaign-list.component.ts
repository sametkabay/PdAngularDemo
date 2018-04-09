import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CampaignService } from '../../Services/campaign.service'
import { campaignPreview, Item } from '../../Models/campaign-preview.model';
import { Router } from '@angular/router';

declare var $: any;
declare var swal: any;

@Component({
  moduleId: module.id,
  selector: 'app-campaignlist',
  templateUrl: './campaign-list.component.html'
})
export class ListComponent {

  campaignPreview: campaignPreview;
  campaigns: Item[];

  constructor(private campaignService: CampaignService,private router:Router) { }

  delete(id: HTMLInputElement) {
    this.campaignService.deleteCampaign(id);
    this.router.navigate(['campaign']);
  }

  
  
  showSwal(id: HTMLInputElement) {

    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',      
      confirmButtonClass: "btn btn-success",
      cancelButtonClass: "btn btn-danger",
      buttonsStyling: false
    }).then(function () {
      
      swal({
        title: 'Deleted!',
        text: 'Your imaginary file has been deleted.',
        type: 'success',
        confirmButtonClass: "btn btn-success",
        buttonsStyling: false,   
             
      },this.rout());


      //this.campaignService.deleteCampaign(id);
    }, function (dismiss) {
      // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
      if (dismiss === 'cancel') {
        swal({
          title: 'Cancelled',
          text: 'Your imaginary file is safe :)',
          type: 'error',
          confirmButtonClass: "btn btn-info",
          buttonsStyling: false
        })
      }
    })


  }



  public ngOnInit() {

    const getAllCampaign = {
      FilterPublished: true,
      FilterWillBePublished: true,
      FilterExpired: true,
      FilterPassive: true,
      SortingLastCreated: true,
      SortingDeadline: true,
      SortingPopularity: true,
      StartDate: '04.04.2018',
      EndDate: '04.04.2019',
      Page: 1,
      SkipCount: 0,
      MaxResultCount: 100
    };
    this.campaignService.allCampaign()
      .subscribe((res: any) => {
        this.campaignPreview = res;
        this.campaigns = res.result.items;

      });

  }
}