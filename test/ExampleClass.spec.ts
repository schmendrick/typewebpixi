import {suite, test} from 'mocha-typescript';

import assert = require("assert");
import {ExampleModule} from "../src/ExampleClass";


@suite class ExampleClassSuite {
    @test addSimpleWorks() {
        var sut= new ExampleModule.ExampleClass();

        let actual = sut.add(1,2)

        assert.equal(3, actual);
    }

    @test addNegativeNumbersWorks() {
        var sut= new ExampleModule.ExampleClass();

        let actual = sut.add(-1,4)

        assert.equal(3, actual);
    }
}