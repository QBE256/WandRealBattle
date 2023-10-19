ItemUseParent.useBackground = function (itemTargetInfo) {
  this._itemTargetInfo = itemTargetInfo;
  this._isItemDecrementDisabled = true;
  this._isItemSkipMode = true;
  this._straightFlow = createObject(StraightFlow);
  this.setItemSkipMode(true);
  this._straightFlow.setStraightFlowData(this);
  this._straightFlow.pushFlowEntry(ItemMainFlowEntry);
  this._straightFlow.enterStraightFlow();
  this.setItemSkipMode(false);
};
