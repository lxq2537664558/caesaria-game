function _t(text) { return engine.translate(text); }

//****************************** widget class *************************************//
Object.defineProperty( Widget.prototype, "text", { set: function(str) { this.setText( _t(str) ); }} );
Object.defineProperty( Widget.prototype, "geometry", { set: function(rect) { this.setGeometry(rect.x,rect.y,rect.x+rect.w,rect.y+rect.h); }} );
Object.defineProperty( Widget.prototype, "position", { set: function(point) { this.setPosition(point.x,point.y); }} );
Object.defineProperty( Widget.prototype, "font", { set: function(fname) { this.setFont(fname); }} );
Object.defineProperty( Widget.prototype, "enabled", { set: function(e) { this.setEnabled(e); }} );
Object.defineProperty( Widget.prototype, "textAlign", { set: function(align) { this.setTextAlignment(align.h,align.v); }} );
Object.defineProperty( Widget.prototype, "tooltip", { set: function(text) { this.setTooltipText(_t(text)); }} );
Object.defineProperty( Widget.prototype, "subElement", { set: function(value) { this.setSubElement(value); }} );
Object.defineProperty( Widget.prototype, "name", { set: function (str) { this.setInternalName(str); }} );

Object.defineProperty( Widget.prototype, "w", { get: function() { return this.width(); }} );
Object.defineProperty( Widget.prototype, "h", { get: function() { return this.height(); }} );
//************************** widget class end ************************************//

//****************************** Label class *************************************//
Object.defineProperty( Label.prototype, "text", { set: function(str) { this.setText( engine.translate(str) ); }} );
Object.defineProperty( Label.prototype, "geometry", { set: function(rect) { this.setGeometry(rect.x,rect.y,rect.x+rect.w,rect.y+rect.h); }} );
Object.defineProperty( Label.prototype, "position", { set: function(point) { this.setPosition(point.x,point.y); }} );
Object.defineProperty( Label.prototype, "font", { set: function(fname) { this.setFont(fname); }} );
Object.defineProperty( Label.prototype, "enabled", { set: function(e) { this.setEnabled(e); }} );
Object.defineProperty( Label.prototype, "textAlign", { set: function(align) { this.setTextAlignment(align.h,align.v); }} );
Object.defineProperty( Label.prototype, "tooltip", { set: function(text) { this.setTooltipText(_t(text)); }} );
Object.defineProperty( Label.prototype, "subElement", { set: function(value) { this.setSubElement(value); }} );
Object.defineProperty( Label.prototype, "name", { set: function (str) { this.setInternalName(str); }} );
Object.defineProperty( Label.prototype, "textColor", {set: function(color) { this.setColor(color); }});

Object.defineProperty( Label.prototype, "w", { get: function() { return this.width(); }} );
Object.defineProperty( Label.prototype, "h", { get: function() { return this.height(); }} );
/************************************* label class end ******************************/

//*************************** button class ***************************************/
function Button(parent) { return new PushButton(parent); }
Object.defineProperty( PushButton.prototype, "text", { set: function(str) { this.setText( engine.translate(str) ); }} );
Object.defineProperty( PushButton.prototype, "geometry", { set: function(rect) { this.setGeometry(rect.x,rect.y,rect.x+rect.w,rect.y+rect.h); }} );
Object.defineProperty( PushButton.prototype, "position", { set: function(point) { this.setPosition(point.x,point.y); }} );
Object.defineProperty( PushButton.prototype, "font", { set: function(fname) { this.setFont(fname); }} );
Object.defineProperty( PushButton.prototype, "enabled", { set: function(e) { this.setEnabled(e); }} );
Object.defineProperty( PushButton.prototype, "textAlign", { set: function(align) { this.setTextAlignment(align.h,align.v); }} );
Object.defineProperty( PushButton.prototype, "tooltip", { set: function(text) { this.setTooltipText(_t(text)); }} );
Object.defineProperty( PushButton.prototype, "subElement", { set: function(value) { this.setSubElement(value); }} );
Object.defineProperty( PushButton.prototype, "name", { set: function (str) { this.setInternalName(str); }} );
Object.defineProperty( PushButton.prototype, "callback", { set: function(func) { this.onClickedEx(func); }});
Object.defineProperty( PushButton.prototype, "style", {  set: function(sname) { this.setBackgroundStyle(sname); }});

Object.defineProperty( PushButton.prototype, "w", { get: function() { return this.width(); }} );
Object.defineProperty( PushButton.prototype, "h", { get: function() { return this.height(); }} );
//*************************** button class end***************************************//

//*************************** TexturedButton class ***************************************//
Object.defineProperty( TexturedButton.prototype, "text", { set: function(str) { this.setText( _t(str) ); }} );
Object.defineProperty( TexturedButton.prototype, "geometry", { set: function(rect) { this.setGeometry(rect.x,rect.y,rect.x+rect.w,rect.y+rect.h); }} );
Object.defineProperty( TexturedButton.prototype, "position", { set: function(point) { this.setPosition(point.x,point.y); }} );
Object.defineProperty( TexturedButton.prototype, "font", { set: function(fname) { this.setFont(fname); }} );
Object.defineProperty( TexturedButton.prototype, "enabled", { set: function(e) { this.setEnabled(e); }} );
Object.defineProperty( TexturedButton.prototype, "textAlign", { set: function(align) { this.setTextAlignment(align.h,align.v); }} );
Object.defineProperty( TexturedButton.prototype, "tooltip", { set: function(text) { this.setTooltipText(_t(text)); }} );
Object.defineProperty( TexturedButton.prototype, "subElement", { set: function(value) { this.setSubElement(value); }} );
Object.defineProperty( TexturedButton.prototype, "name", { set: function (str) { this.setInternalName(str); }} );
Object.defineProperty( TexturedButton.prototype, "callback", { set: function(func) { this.onClickedEx(func); }});
Object.defineProperty( TexturedButton.prototype, "states", {  set: function(st) { this.changeImageSet(st.rc,st.normal,st.hover,st.pressed,st.disabled); }});
//*************************** TexturedButton class end***************************************//

//*************************** ExitButton class ***************************************//
Object.defineProperty( ExitButton.prototype, "geometry", { set: function(rect) { this.setGeometry(rect.x,rect.y,rect.x+rect.w,rect.y+rect.h); }} );
Object.defineProperty( ExitButton.prototype, "position", { set: function(point) { this.setPosition(point.x,point.y); }} );
Object.defineProperty( ExitButton.prototype, "tooltip", { set: function(text) { this.setTooltipText(_t(text)); }} );
Object.defineProperty( ExitButton.prototype, "callback", { set: function(func) { this.onClickedEx(func); }});
Object.defineProperty( ExitButton.prototype, "states", {  set: function(st) { this.changeImageSet(st.rc,st.normal,st.hover,st.pressed,st.disabled); }});
//*************************** ExitButton class end***************************************//

//*************************** Spinbox class ***************************************//
function Spinbox(parent) { return new SpinBox(parent); }
Object.defineProperty( SpinBox.prototype, "text", { set: function(str) { this.setText( _t(str) ); }} );
Object.defineProperty( SpinBox.prototype, "geometry", { set: function(rect) { this.setGeometry(rect.x,rect.y,rect.x+rect.w,rect.y+rect.h); }} );
Object.defineProperty( SpinBox.prototype, "position", { set: function(point) { this.setPosition(point.x,point.y); }} );
Object.defineProperty( SpinBox.prototype, "font", { set: function(fname) { this.setFont(fname); }} );
Object.defineProperty( SpinBox.prototype, "enabled", { set: function(e) { this.setEnabled(e); }} );
Object.defineProperty( SpinBox.prototype, "textAlign", { set: function(align) { this.setTextAlignment(align.h,align.v); }} );
Object.defineProperty( SpinBox.prototype, "tooltip", { set: function(text) { this.setTooltipText(_t(text)); }} );
Object.defineProperty( SpinBox.prototype, "subElement", { set: function(value) { this.setSubElement(value); }} );
Object.defineProperty( SpinBox.prototype, "name", { set: function (str) { this.setInternalName(str); }} );

Object.defineProperty( SpinBox.prototype, "w", { get: function() { return this.width(); }} );
Object.defineProperty( SpinBox.prototype, "h", { get: function() { return this.height(); }} );

Object.defineProperty( SpinBox.prototype, "postfix", { set: function(text) { this.setPostfix(_t(text)); }} );
Object.defineProperty( SpinBox.prototype, "value", { set: function(text) { this.setValue(text); }} );
Object.defineProperty( SpinBox.prototype, "callback", { set: function(func) { this.onChangeA(func); }} );
//*************************** Spinbox class end***************************************//

//*************************** Listbox class ***************************************//
function Listbox(parent) { return new ListBox(parent); }
Object.defineProperty( ListBox.prototype, "style", { set: function(sname) { this.setBackgroundStyle(sname); }} );
Object.defineProperty( ListBox.prototype, "background", { set: function(enabled) { this.setDrawBackground(enabled); }} );
Object.defineProperty( ListBox.prototype, "selectedIndex", { set: function(index) { this.setSelected(index); }} );
Object.defineProperty( ListBox.prototype, "selectedWithData", { set: function(obj) { this.setSelectedWithData(obj.name,obj.data); }} );
Object.defineProperty( ListBox.prototype, "count", { get: function () { return this.itemsCount(); }} );
Object.defineProperty( ListBox.prototype, "onSelectedCallback", { set: function(func) { this.onIndexSelectedEx(func); }} );
Object.defineProperty( ListBox.prototype, "onDblclickCallback", { set: function(func) { this.onIndexSelectedAgainEx(func); }} )

Object.defineProperty( ListBox.prototype, "geometry", { set: function(rect) { this.setGeometry(rect.x,rect.y,rect.x+rect.w,rect.y+rect.h); }} );
Object.defineProperty( ListBox.prototype, "position", { set: function(point) { this.setPosition(point.x,point.y); }} );
Object.defineProperty( ListBox.prototype, "font", { set: function(fname) { this.setFont(fname); }} );
Object.defineProperty( ListBox.prototype, "enabled", { set: function(e) { this.setEnabled(e); }} );
Object.defineProperty( ListBox.prototype, "textAlign", { set: function(align) { this.setTextAlignment(align.h,align.v); }} );
Object.defineProperty( ListBox.prototype, "tooltip", { set: function(text) { this.setTooltipText(_t(text)); }} );
Object.defineProperty( ListBox.prototype, "subElement", { set: function(value) { this.setSubElement(value); }} );
Object.defineProperty( ListBox.prototype, "name", { set: function (str) { this.setInternalName(str); }} );

Object.defineProperty( ListBox.prototype, "w", { get: function() { return this.width(); }} );
Object.defineProperty( ListBox.prototype, "h", { get: function() { return this.height(); }} );

Object.defineProperty( ListBox.prototype, "itemColor", { set: function (obj) {
    if(obj.simple) this.setItemDefaultColor("simple", setItemDefaultColor);
    if(obj.hovered) this.setItemDefaultColor("hovered", setItemDefaultColor);
  }} );

ListBox.prototype.setData = function(index,name,data) { this.setItemData(index,name,data); };
//*************************** Listbox class end ***************************************//

//*************************** Dialogbox class ***************************************//
Object.defineProperty( Dialogbox.prototype, "title", { set: function(str) { this.setTitle( _t(str) ); }} )
Object.defineProperty( Dialogbox.prototype, "text", { set: function(str) { this.setText( _t(str) ); }} )
Object.defineProperty( Dialogbox.prototype, "buttons", { set: function(flags) { this.setButtons(flags); }} )
Object.defineProperty( Dialogbox.prototype, "onYesCallback", { set:function (func) { this.onYesEx(func); }} )
Object.defineProperty( Dialogbox.prototype, "onNoCallback", { set:function (func) { this.onNoEx(func); }} )
Object.defineProperty( Dialogbox.prototype, "neverValue", { set: function (enabled) { this.setNeverValue(enabled); }} )
Object.defineProperty( Dialogbox.prototype, "onNeverCallback", { set:function (func) { this.onNeverEx(func); }} )
//*************************** Dialogbox class end ***************************************//

//*************************** Editbox class ***************************************//
function Editbox(parent) { return new EditBox(parent); }

Object.defineProperty( EditBox.prototype, "text", { set: function(str) { this.setText( _t(str) ); }} )
Object.defineProperty( EditBox.prototype, "geometry", { set: function(rect) { this.setGeometry(rect.x,rect.y,rect.x+rect.w,rect.y+rect.h); }} );
Object.defineProperty( EditBox.prototype, "position", { set: function(point) { this.setPosition(point.x,point.y); }} );
Object.defineProperty( EditBox.prototype, "font", { set: function(fname) { this.setFont(fname); }} );
Object.defineProperty( EditBox.prototype, "enabled", { set: function(e) { this.setEnabled(e); }} );
Object.defineProperty( EditBox.prototype, "textAlign", { set: function(align) { this.setTextAlignment(align.h,align.v); }} );
Object.defineProperty( EditBox.prototype, "tooltip", { set: function(text) { this.setTooltipText(_t(text)); }} );
Object.defineProperty( EditBox.prototype, "name", { set: function (str) { this.setInternalName(str); }} );

Object.defineProperty( EditBox.prototype, "textOffset", { set: function(p) { this.setTextOffset(p.x,p.y); }} );
Object.defineProperty( EditBox.prototype, "cursorPos", { set: function(index) { this.moveCursor(index); }} );
Object.defineProperty( EditBox.prototype, "onTextChangeCallback", { set: function(func) { this.onTextChangedEx(func); }} );
Object.defineProperty( EditBox.prototype, "onEnterPressedCallback", { set: function(func) { this.onEnterPressedEx(func); }} );

Object.defineProperty( EditBox.prototype, "w", { set:function () { return this.width(); }} )
Object.defineProperty( EditBox.prototype, "h", { set:function () { return this.height(); }} )
//*************************** Editbox class end***************************************//

//*************************** Fade class ***************************************//
Object.defineProperty( Fade.prototype, "alpha", { set:function (value) { this.setAlpha(value); }} )
Object.defineProperty( Fade.prototype, "w", { set:function () { return this.width(); }} )
Object.defineProperty( Fade.prototype, "h", { set:function () { return this.height(); }} )
//*************************** Fade class end***************************************//

//*************************** DictionaryText class begin ***************************************//
Object.defineProperty( DictionaryText.prototype, "text", { set: function (str) { this.setText(_t(str)); }} )
Object.defineProperty( DictionaryText.prototype, "font", { set: function (fname) { this.setFont(fname); }} )
Object.defineProperty( DictionaryText.prototype, "geometry", {set: function (rect) { this.setGeometry(rect.x,rect.y,rect.x+rect.w,rect.y+rect.h); }} )
Object.defineProperty( DictionaryText.prototype, "w", { set: function () { return this.width(); }} )
Object.defineProperty( DictionaryText.prototype, "h", { set: function () { return this.height(); }} )
//*************************** DictionaryText class end ***************************************//

//*************************** PosisitionAnimator class begin ***************************************//
Object.defineProperty( PositionAnimator.prototype, "destination", { set: function (point) { this.setDestination(point.x,point.y); }} )
Object.defineProperty( PositionAnimator.prototype, "speed", { set:function (point) { this.setSpeed(point.x,point.y); }} )
Object.defineProperty( PositionAnimator.prototype, "removeParent", { set:function (value) { this.setFlag("removeParent", value ); }} )
//*************************** PosisitionAnimator class end ***************************************//

//*************************** Image class begin ***************************************//
Object.defineProperty( Image.prototype, "position", {set: function (point) { this.setPosition(point.x,point.y); }} )
Object.defineProperty( Image.prototype, "geometry", {set: function (rect) { this.setGeometry(rect.x,rect.y,rect.x+rect.w,rect.y+rect.h); }} )
Object.defineProperty( Image.prototype, "tooltip", {set: function (text) { this.setTooltipText(_t(text)); }} )
Object.defineProperty( Image.prototype, "picture", {set: function (name) { this.setPicture(name); }} )
//*************************** Image class end ***************************************//

//*************************** FileSelector class begin ***************************************//
function FileSelector(parent) { this.widget = new FileListBox(parent); }

Object.defineProperty( FileListBox.prototype, "geometry", {set: function (rect) { this.setGeometry(rect.x,rect.y,rect.x+rect.w,rect.y+rect.h); }} )
Object.defineProperty( FileListBox.prototype, "background", {set: function (enabled) { this.setDrawBackground(enabled); }} )
Object.defineProperty( FileListBox.prototype, "selectedIndex", {set:function (index) { this.setSelected(index); }} )
Object.defineProperty( FileListBox.prototype, "itemHeight", {set: function (h) { this.setItemsHeight(h); }} )
Object.defineProperty( FileListBox.prototype, "items", {set: function (paths) { this.addLines(paths); }} )
Object.defineProperty( FileListBox.prototype, "selectedWithData", {set: function (obj) { this.setSelectedWithData(obj.name,obj.data); }} )
Object.defineProperty( FileListBox.prototype, "count", {set: function () { return this.itemsCount(); }} )
Object.defineProperty( FileListBox.prototype, "onSelectedCallback", { set: function(func) { this.onIndexSelectedEx(func); }} )
//*************************** FileSelector class end ***************************************//

//*************************** SaveGameDialog class begin ***************************************//
Object.defineProperty( SaveGame.prototype, "directory", {set: function (path) { this.setDirectory(path); }} )
Object.defineProperty( SaveGame.prototype, "filter", {set: function (ext) { this.setFilter(ext); }} )
//*************************** SaveGameDialog class end ***************************************//

//*************************** FileDialog class begin ***************************************//
function FileDialog(parent,advanced) {
    if (advanced)
      this.widget = new LoadGame(parent);
    else
      this.widget = new LoadFboxile(parent);
}

Object.defineProperty( FileDialog.prototype, "title", { set: function (str) { this.setTitle( _t(str) ); }} )
Object.defineProperty( FileDialog.prototype, "showExtensions", { set: function (en) { this.setShowExtensions(en); }} )
Object.defineProperty( FileDialog.prototype, "text", { set: function (str) { this.setText( _t(str) ); }} )
Object.defineProperty( FileDialog.prototype, "directory", { set: function (path) { this.setDirectory(path); }} )
Object.defineProperty( FileDialog.prototype, "filter", {set: function (str) { this.setFilter(str); }} )
Object.defineProperty( FileDialog.prototype, "mayDeleteFiles", { set: function (en) { this.setMayDelete(en); }} )
Object.defineProperty( FileDialog.prototype, "callback", {set: function (func) { this.onSelectFileEx(func); }} )
//*************************** FileDialog class end ***************************************//

//*************************** ContextMenu class begin ***************************************//
ContextMenu.prototype.addItemWithCallback = function(path,caption,func) {
    var item = this.addItem(path,_t(caption));
    item.callback = func;
    return item;
}
//*************************** ContextMenu class end ***************************************//

//*************************** ContextMenuItem class begin ***************************************//
Object.defineProperty( ContextMenuItem.prototype, "callback", {set: function (func) { this.onClickedA(func); }} )
Object.defineProperty( ContextMenuItem.prototype, "autoChecking", {set: function(en) { this.setAutoChecking(en)}} )
ContextMenuItem.prototype.addItemWithCallback = function(caption,func) {
    var item = this.addSubmenuItem(_t(caption));
    item.callback = func;
    return item;
}
//*************************** ContextMenuItem class end ***************************************//

//*************************** Window class begin ***************************************//
Object.defineProperty( Window.prototype, "title", { set: function (str) { this.setText( _t(str) ); }} );
Object.defineProperty( Window.prototype, "geometry", { set: function (rect) { this.setGeometry(rect.x,rect.y,rect.x+rect.w,rect.y+rect.h); }} );
Object.defineProperty( Window.prototype, "mayMove", { set: function(may) { this.setWindowFlag("fdraggable",may); }} );
Object.defineProperty( Window.prototype, "onCloseCallback", { set: function (func) { this.onCloseEx(func); }} );
Object.defineProperty( Window.prototype, "model", { set: function (path) { this.setupUI(path); }} );
Object.defineProperty( Window.prototype, "w", { get: function () { return this.width(); }} );
Object.defineProperty( Window.prototype, "h", { get: function() { return this.height(); }} );

Window.prototype.closeAfterKey = function(obj) {
      if(obj.escape)
        this.addCloseCode(0x1B);
      if(obj.rmb)
        this.addCloseCode(0x4);
  }

Window.prototype.addLabel = function(rx,ry,rw,rh) {
    var label = new Label(this);
    label.geometry = { x:rx, y:ry, w:rw, h:rh };
    return label;
  }

Window.prototype.addSpinbox = function(rx,ry,rw,rh) {
    var spinbox = new Spinbox(this);
    spinbox.geometry = { x:rx, y:ry, w:rw, h:rh };
    return spinbox;
  }

Window.prototype.addFileSelector = function(rx,ry,rw,rh) {
    var selector = new FileSelector(this);
    selector.geometry = { x:rx, y:ry, w:rw, h:rh };
    return selector;
  }

Window.prototype.addDictionaryText = function(rx,ry,rw,rh) {
    var dtext = new DictionaryText(this);
    dtext.geometry = { x:rx, y:ry, w:rw, h:rh };
    return dtext;
  }

Window.prototype.addListbox = function(rx,ry,rw,rh) {
    var listbox = new Listbox(this);
    listbox.geometry = { x:rx, y:ry, w:rw, h:rh };
    return listbox;
  }

Window.prototype.addEditbox = function(rx,ry,rw,rh) {
    var edit = new Editbox(this);
    edit.geometry = { x:rx, y:ry, w:rw, h:rh };
    return edit;
  }

Window.prototype.addImage = function(rx,ry,picname) {
    var image = new Image(this);
    image.picture = picname;
    image.position = {x:rx,y:ry};
    return image;
  }

Window.prototype.addTexturedButton = function(rx,ry,rw,rh) {
    var button = new TexturedButton(this);
    button.geometry = { x:rx, y:ry, w:rw, h:rh };
    return button;
  }

Window.prototype.addButton = function(rx,ry,rw,rh) {
    var button = new Button(this);
    button.geometry = { x:rx, y:ry, w:rw, h:rh };
    return button;
  }

Window.prototype.addExitButton = function(rx,ry) {
    var btn = new ExitButton(this);
    btn.position = { x:rx, y:ry }
    return btn;
  }
//*************************** Window class begin ***************************************//

function Ui() {
}

Ui.prototype = {
  addWindow : function(rx,ry,rw,rh) {
    var window = new Window(0);
    window.geometry = { x:rx, y:ry, w:rx+rw, h:ry+rh };
    return window;
  },

  addInformationDialog: function(title, text) {
    var dialog = new Dialogbox(0);
    dialog.title = _t(title);
    dialog.text = _t(text);
    dialog.buttons = 1;
    return dialog;
  },

  addFileDialog: function(dir,ext,adv) {
    var dialog = new FileDialog(0,adv);
    dialog.directory = dir;
    if (ext.length > 0)
      dialog.filter = ext;
    return dialog;
  },

  addFade : function(value) {
    var fade = new Fade(0);
    fade.alpha = value;
    return fade;
  },

  addSaveGameDialog: function(dir, ext) {
    var dialog = new SaveGame(0);
    dialog.directory = dir;
    dialog.extension = ext;
    return dialog;
  },

  addConfirmationDialog: function(title, text) {
    var dialog = new Dialogbox(0);
    dialog.title = _t(title);
    dialog.text = _t(text);
    dialog.buttons = 3;
    return dialog;
  },

  elog : function(a) { engine.log(a); }
};

var g_ui = new Ui();
