class Canvas {
	private static instance: Canvas;
	private constructor(newInstance: HTMLElement | null) {
		if (!newInstance || !(newInstance instanceof HTMLCanvasElement)) {
			throw new Error('캔버스가 아니자나');
		}
	}

	static getInstance() {
		if (!this.instance) {
			this.instance = new Canvas(document.getElementById('canvas'));
		}

		return this.instance;
	}
}

export default Canvas;
