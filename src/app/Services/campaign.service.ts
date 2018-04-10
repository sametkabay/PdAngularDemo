import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CampaignService {

  private readonly apiUrl_GetAll = "https://proximitydesktestapp.azurewebsites.net/api/services/app/Campaign/GetCampaigns?FilterPublished=true&FilterWillBePublished=true&FilterExpired=true&FilterPassive=true&SortingLastCreated=true&SortingDeadline=true&SortingPopularity=true&StartDate=04.04.2018&EndDate=04.04.2019&Page=1&SkipCount=0&MaxResultCount=100";
  private readonly apiUrl_Delete = "https://proximitydesktestapp.azurewebsites.net/api/services/app/Campaign/DeleteCampaign?id="
  private readonly apiUrl_Create = "https://proximitydesktestapp.azurewebsites.net/api/services/app/Campaign/CreateCampaign"


  constructor(private http: HttpClient) { }

  allCampaign() {
    return this.http.get(this.apiUrl_GetAll);
  }

  deleteCampaign(id) {
    this.http.delete(this.apiUrl_Delete + id).subscribe(() => console.log("user deleted: "+ id));
  }

}
