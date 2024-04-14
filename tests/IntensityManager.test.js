const assert = require('assert');
const IntensityManager = require('../src/models/IntensityManager')

describe('IntensityManager', () => {
    describe('#add()', () => {
        it('should add positive intensity segment to empty array', () => {
            const intensityManager = new IntensityManager();
            const result = intensityManager.add(10, 30, 1);
            assert.deepStrictEqual(result, [[10, 1], [30, 0]]);
        });

        it('should add negative intensity segment to empty array', () => {
            const intensityManager = new IntensityManager();
            const result = intensityManager.add(10, 30, -5);
            assert.deepStrictEqual(result, [[10, -5], [30, 0]]);
        });

        it('should add positive intensity segment to existing array', () => {
            const intensityManager = new IntensityManager([[10, 1], [30, 0]]);
            const result = intensityManager.add(20, 40, 1);
            assert.deepStrictEqual(result, [[10,1],[20,2],[30,1],[40,0]]);
        });

        it('should add negative intensity segment to existing array', () => {
            const intensityManager = new IntensityManager([[10,1],[20,2],[30,1],[40,0]]);
            const result = intensityManager.add(10, 40, -2);
            assert.deepStrictEqual(result, [[10,-1],[20,0],[30,-1],[40,0]]);
        });

         it('should handle merging segments correctly', () => {
             const intensityManager = new IntensityManager([[10,1],[20,2],[30,1],[40,0]]);
             const result = intensityManager.add(10, 40, -1);
             assert.deepStrictEqual(result, [[20,1],[30,0]]);
         });

        it('should add segments when negative intensity addition results in 0 intensity between other values', () => {
            const intensityManager = new IntensityManager([[20,1],[30,0]]);
            const result = intensityManager.add(10, 40, -1);
            assert.deepStrictEqual(result, [[10,-1],[20,0],[30,-1],[40,0]]);
        });
    });

/*     describe('#set()', () => {
        it('should set positive intensity segment to empty array', () => {
            const intensityManager = new IntensityManager();
            const result = intensityManager.set(10, 30, 1);
            assert.deepStrictEqual(result, [[10, 1], [30, 0]]);
        });

        it('should set negative intensity segment to empty array', () => {
            const intensityManager = new IntensityManager();
            const result = intensityManager.set(10, 30, -5);
            assert.deepStrictEqual(result, [[10, -5], [30, 0]]);
        });

        it('should set positive intensity segment to existing array', () => {
            const intensityManager = new IntensityManager([[10, 1], [30, 0]]);
            const result = intensityManager.set(20, 40, 5);
            assert.deepStrictEqual(result, [[10,1],[20,5],[40,0]]);
        });

        it('should add negative intensity segment to existing array', () => {
            const intensityManager = new IntensityManager([[10,1],[20,2],[30,1],[40,0]]);
            const result = intensityManager.add(10, 40, -2);
            assert.deepStrictEqual(result, [[10,-1],[20,0],[30,-1],[40,0]]);
        });

        it('should handle merging segments correctly', () => {
            const intensityManager = new IntensityManager([[10,1],[20,2],[30,1],[40,0]]);
            const result = intensityManager.add(10, 40, -1);
            assert.deepStrictEqual(result, [[20,1],[30,0]]);
        });

        it('should add segments when negative intensity addition results in 0 intensity between other values', () => {
            const intensityManager = new IntensityManager([[20,1],[30,0]]);
            const result = intensityManager.add(10, 40, -1);
            assert.deepStrictEqual(result, [[10,-1],[20,0],[30,-1],[40,0]]);
        });
    }); */
});
