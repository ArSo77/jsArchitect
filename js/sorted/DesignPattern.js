


//Strategy
export class Pencil {
    constructor(capSize, color) {
        this._drawing = false
        this._capSize = capSize || 5
        this._color = color || 'black'
    }
    onMouseMove(x, y, ctx) {
        if (this._drawing) {
            ctx.lineWidth = this._capSize
            ctx.lineCap = 'round'
            ctx.strokeStyle = this._color
            ctx.lineTo(x, y)
            ctx.stroke()
        }
    }
    onMouseUp(x, y, ctx) {
        this._drawing = false
        ctx.beginPath()
    }
    onMouseDown(x, y, ctx) {
        if (!this._drawing) {
            this._drawing = true
        }
    }
}
//...
export class DrawingBoardUI {
    constructor(container, width, height) {
        this.currentTool = null
        this.attachCanvas(container, this.createCanvas(width, height))
    }
    createCanvas(width, height) {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = width
        canvas.height = height
        canvas.addEventListener('mousemove', (ev) => {
            if (this.currentTool) {
                this.currentTool.onMouseMove(ev.offsetX, ev.offsetY, ctx)
            }
        })
        canvas.addEventListener('mousedown', (ev) => {
            if (this.currentTool) {
                this.currentTool.onMouseDown(ev.offsetX, ev.offsetY, ctx)
            }
        })
        canvas.addEventListener('mouseup', (ev) => {
            if (this.currentTool) {
                this.currentTool.onMouseUp(ev.offsetX, ev.offsetY, ctx)
            }
        })
        return canvas
    }
    attachCanvas(container, canvas) {
        document.querySelector(container).appendChild(canvas)
    }
    changeTool(tool) {
        this.currentTool = tool
    }
}


//Observer
export class ToolsUI {
    constructor(container) {
        const root = this.createRoot()
        this.createButtons(root)
        this.attachToContainer(container, root)
        this.subscribers = []
    }

    createRoot() {
        const root = document.createElement('div')
        root.classList.add('flex', 'flex-column')
        return root
    }

    createButtons(root) {
        root.appendChild(this.createButton('Pencil', 'pencil'))
        root.appendChild(this.createButton('Brush', 'brush'))
        root.appendChild(this.createButton('Shape', 'shape'))
    }

    attachToContainer(container, root) {
        document.querySelector(container).appendChild(root)
    }

    createButton(name, selector) {
        const btn = document.createElement('button');
        btn.setAttribute('data-tool', selector);
        btn.textContent = name;
        btn.addEventListener('click', () => {
            this.subscribers.forEach(s => s(selector))  //wykonanie akcji na subskrybentach
        })
        return btn
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber)
    }

}




//Factory
import { Brush } from './Brush.js';
import { Pencil } from './Pencil.js';
import { Shape } from './Shape.js';

export class ToolsFactory {

    constructor() {
        this.brush = new Brush(20, 'lightblue');
        this.pencil = new Pencil(3, 'red');
        this.shape = new Shape(20, 'red');
    }

    getTool(tool) {
        switch (tool) {
            case 'brush':
                return this.brush;
            case 'pencil':
                return this.pencil;
            case 'shape':
                return this.shape;
        }
    }

}


