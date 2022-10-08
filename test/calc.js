const Calculator = require('../calc');

describe('Calculator', () => {
    let calc, a, b;

    beforeEach(() => {
        // Arrange
        calc = new Calculator();
        a = Math.random();
        b = Math.random();
    });

    it('should add correctly', () => {
        // Act
        let result = calc.add(a, b);
        // Assert
        expect(result).toBe(a + b);
    });

    it("should subtract correctly", () => {
        // Act
        let result = calc.sub(a, b);
        // Assert
        expect(result).toBe(a - b);
    });

    it("should add if positive number is subtracted to negative number", () => {
        // Act
        let result = calc.sub(a, -b);
        // Assert
        expect(result).toBe(a - (-b));
    });

    it("should multiply correctly", () => {
        // Act
        let result = calc.mul(a, b);
        // Assert
        expect(result).toBe(a * b);
    });

    it("should divide correctly", () => {
        // Act
        let result = calc.div(a, b);
        // Assert
        expect(result).toBe(a / b);
    });

    it("should error when divided by zero", () => {
        // Act and Assert
        expect(() => calc.div(a, 0)).toThrow("Can't divide by zero");
    });

    it("should factorial correctly", () => {
        // Act
        let result = calc.fact(5);
        // Assert
        expect(result).toBe(120);
    });

    it("should error when factorial negative value", () => {
        // Act and Assert
        expect(() => calc.fact(-5)).toThrow("Can't factoral negative values");
    });

    it("should give result 5 when abs() is done for value of a<1", () => {
        // Act
        let result = calc.abs(-5);
        // Assert
        expect(result).toBe(5);
    });

    it("should give undefined if sqrt of negative value is done", () => {
        // Act and Assert
        expect(() => calc.sqrt(-a)).toThrow("Undefined");
    });

    it("should give square root value", () => {
        // Act
        let result = calc.pow(a, 2);
        // Assert
        expect(result).toBe(a*a);;
    });

    it("should convert from cm to inches", () => {
        let result = calc.cm_to_inch(100);
        expect(result).toBe(39.3701)
    })

});
