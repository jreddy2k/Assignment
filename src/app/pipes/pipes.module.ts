import { NgModule } from "@angular/core";

import { StringFilterByPipe } from "src/app/pipes/pipes";

@NgModule({
  declarations: [StringFilterByPipe],

  exports: [StringFilterByPipe]
})
export class PipesModule {}