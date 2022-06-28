import { Page } from "../model-page/page";

export abstract class ListAbstract {
    page = new Page();

    constructor() {
        this.page.pageNumber = 0;
        this.page.size = 10;
      }

    abstract loadData():any;

    setPage(pageInfo: any) {
        console.log(pageInfo);
        this.page.pageNumber = pageInfo.offset;
        this.loadData();
    }
    resetPage(){
        this.page.pageNumber = 0;
        this.page.row = [];
    }

    reloadData(){
        this.resetPage();
        this.loadData();
    }
}
