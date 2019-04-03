import { Component, OnInit } from "@angular/core";
import { HTTP_PREFIX, DataContextComponent, DataContext } from "progress-sitefinity-adminapp-sdk/app/api/v1";
import { HttpClient } from "@angular/common/http";

/**
 * A custom component to be displayed in each cell in a specific column in the grid.
 */
@Component({
    template: require("./image.component.html")
})
export class ImageComponent implements OnInit, DataContextComponent {
    constructor(http: HttpClient) {
        this._httpClient = http;
    }

    // This context is automatically set for each component instantiated in the grid.
    // It holds metadata that includes the data item for the current row and the column model as well.
    context: DataContext;
    
    // Sample height of the image
    protected imageHeight = 50;
    protected imageSource;
    private _httpClient;

    ngOnInit() {
        let torrentGuid = this.context.dataItem.key;
        let url = `${HTTP_PREFIX}/sf/system/torrents(${torrentGuid})?$select=*&$expand=ImageFile`;

        // request with url below returns 404 Not Found
        // let url = `${HTTP_PREFIX}/sf/system/torrents(${torrentGuid})?$select=*&$expand=ImageFile&sf_provider=OpenAccessDataProvider&sf_culture=en&sf_fallback_prop_names=ImageFile.Title`;
        this._httpClient.get(url)
            .subscribe(data => {
                if(data.ImageFile){
                    this.imageSource = data.ImageFile.Url;
                }
            }, error => {
                console.log(error)
            });
    }
}
