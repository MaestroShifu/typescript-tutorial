type Cuadrado = {
    kind: 'square',
    size: number
};

type Rectangulo = {
    kind: 'rectangle',
    width: number,
    height: number
};

type Circulo = {
    kind: 'circle',
    radius: number
};

type Figuras = Cuadrado | Rectangulo | Circulo;

const areaCalculate = (s: Figuras) => {
    if(s.kind === 'circle') {
        return Math.PI * (s.radius ** 2);
    } else if (s.kind === 'rectangle') {
        return s.width * s.height;
    } else if (s.kind === 'square') {
        return s.size * s.size;
    }
    const _ensureAllCasesAreHandled: never = s;
    return _ensureAllCasesAreHandled;
}
