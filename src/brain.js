
function _random() {
  return (Math.random() * 2) - 1;
}

function sigmoid(value) {
    return (1 / (1 + Math.exp((-1 * value) / 1)));
};

export class BrainFactory {
  constructor(input_size, output_size) {
    let layers_size = 3;
    let hidden_size = 1;

    if (input_size > output_size) {
        hidden_size = input_size;
        layers_size = Math.max(input_size - output_size, 3);
    } else {
        hidden_size = output_size;
        layers_size = Math.max(output_size - input_size, 3);
    }

    this.input_size = input_size;
    this.output_size = output_size;
    this.hidden_size = hidden_size;
    this.layers_size = layers_size;
  }

  create_brain() {
    let layers = new Array(this.layers_size)
      .fill(0)
      .map((_, layer) => this._layer_config(layer))
      .map((lc) => this._create_layer(lc));
    return new Brain(layers);
  }

  _layer_config(layer) {
    let prev = this.hidden_size;
    let size = this.hidden_size;

    if (layer === 0) {
      prev = 0;
      size = this.input_size;
    } else if (layer === 1) {
      prev = this.input_size;
    } else if (layer === this.layers_size - 1) {
      size = this.output_size;
    }

    return {
      size,
      prev
    };
  }

  _create_layer(lc) {
    return new Array(lc.size).fill(0).map(_ => ({
      value: _random(),
      weights: new Array(lc.prev).fill(0).map(val => _random())
    }));
  }
}

export class Brain {
  constructor(layers) {
    this.layers = layers;
  }
}
