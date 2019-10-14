import { Injectable } from '@angular/core';

@Injectable()
export class SorterService {

  property: string = null;
  direction = 1;

  sort(collection: any[], prop: any) {
    this.property = prop;
    this.direction = (this.property === prop) ? this.direction * -1 : 1;

    collection.sort((a: any, b: any) => {
      let aVal: any;
      let bVal: any;

      // handle resolving complex prop like 'state.name' for prop value
      if (prop && prop.indexOf('.') > -1) {
        aVal = this.resolveProperty(prop, a);
        bVal = this.resolveProperty(prop, b);
      } else {
        aVal = a[prop];
        bVal = b[prop];
      }

      // fix issue for string containing spaces before/after
      if (this.isString(aVal)) { aVal = aVal.trim().toUpperCase(); }
      if (this.isString(bVal)) { bVal = bVal.trim().toUpperCase(); }

      if (aVal === bVal) {
        return 0;
      } else if (aVal > bVal) {
        return this.direction * -1;
      } else {
        return this.direction * 1;
      }
    });
  }

  isString(val: any): boolean {
    return (val && (typeof val === 'string' || val instanceof String));
  }

  resolveProperty(path: string, object: any) {
    return path.split('.').reduce((previous, current) => {
      return (previous ? previous[current] : undefined);
    }, object || self);
  }
}
