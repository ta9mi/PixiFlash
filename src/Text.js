/**
 * @module Pixi Flash
 * @namespace pixiflash
 */
(function(undefined)
{
	var PixiText = PIXI.Text,
		DisplayObject = pixiflash.DisplayObject;
	
	/**
	 * The class to emulate createjs.Text
	 * @class Text
	 * @extends PIXI.Text
	 */
	var Text = function(text, font, color)
	{
		PixiText.call(this, '');
		DisplayObject.call(this);
		
		/**
		 * The text to DisplayObject
		 * @property {String} text
		 */
		this.text = text;
		
		/**
		 * The text to DisplayObject.
		 * @property {String} font
		 */
		this.font = font;
		
		/**
		 * The font style to use. Any valid value for the CSS font attribute is acceptable.
		 * @property {String} color
		 */
		this.color = color;
		
		/**
		 * The text to DisplayObject
		 * @property {String} textAlign
		 */
		this.textAlign = "left";
		
		/**
		 * The text to DisplayObject
		 * @property {String} textBaseline
		 */
		this.textBaseline = "top";
		
		/**
		 * The text to DisplayObject
		 * @property {Number} outline
		 */
		this.outline = 0;
		
		/**
		 * The text to DisplayObject
		 * @property {Number} lineHeight
		 */
		this.lineHeight = 0;
		
		/**
		 * The text to DisplayObject
		 * @property {Object} resolution
		 */
		this.resolution = {
			font: this.font,
			fill: this.color,
			lineHeight: this.lineHeight,
			align: this.textAlign,
			stroke: this.color,
			strokeThickness: this.outline,
			textBaseline: this.textBaseline
		};
		
	};
	
	// Extend PIXI.Text
	var p = Text.prototype = Object.create(PixiText.prototype);
	
	// Mixin the display object
	DisplayObject.mixin(p);
	
	//constructor for backwards/Flash exporting compatibility
	p.initialize = Text;
	
	// Assign to namespace
	pixiflash.Text = Text;
	
}());
