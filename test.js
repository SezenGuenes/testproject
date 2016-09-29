QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("calculate", function (assert) {
      assert.ok(calculate(5, 20) == [[5, 10.02000000000002, 15.060080000000017, 20.12032032000009], 4], "Passed!");
});