//Flyweight pattern optimizes memory usage by sharing common data between objects instead of duplicating it.
//When you're dealing with a large number of similar objects and want to minimize memory footprint.
//In this example, we want to render thousands of similar icons in a file explorer. 
//This pattern lets you reuse the same folderIcon instead of creating new instances every time.

class Icon {
  private type: string;

  constructor(type: string) {
    this.type = type;
  }

  draw(x: number, y: number): void {
    console.log(`Drawing ${this.type} icon at (${x}, ${y})`);
  }
}

class IconFactory {
  private icons: Record<string, Icon>;

  constructor() {
    this.icons = {};
  }

  getIcon(type: string): Icon {
    if (!this.icons[type]) {
      this.icons[type] = new Icon(type);
    }
    return this.icons[type];
  }
}

// ✅ Usage
const factory = new IconFactory();

const folderIcon = factory.getIcon('folder');
folderIcon.draw(10, 10);

factory.getIcon('folder').draw(20, 20); // same object reused!
