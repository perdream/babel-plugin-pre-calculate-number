import test from 'ava';
import { transformFile } from 'babel-core';
import util from 'util';
import path from 'path';

const root = process.cwd();

test("plus", async (t) => {
  const { code } = await util.promisify(transformFile)(path.join(root, 'test', 'power.js'), {
    plugins: [
      require(path.join(root, 'index.js'))
    ]
  });
  t.deepEqual(code, `const result = 4;`);
});

test("multiple-plus", async (t) => {
  const { code } = await util.promisify(transformFile)(path.join(root, 'test', 'power-multiple.js'), {
    plugins: [
      require(path.join(root, 'index.js'))
    ]
  });
  t.deepEqual(code, `const result = 16;`);
})