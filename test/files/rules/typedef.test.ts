var NoTypeObjectLiteralWithPropertyGetter = {
    Prop: "some property",

    get PropDef() {
        return this.Prop;
    },

    methodDef() {
        return 'untyped';
    },

    anotherMethodDef: function() {
        return 'also untyped';
    },

    arrowMethodDef: () => {
        return 'also untyped';
    }
};

interface NoTypeInterface {
    Prop;
    PropWithType: string;
}

var NoTypesFn = function (
    a,
    b) {
    var c = a + b,
        d = a - b;
};

class NoTypesClass {
    [index: number]: number;

    Member = "some property";

    public get name() {
        return "some name";
    }

    private unTyped() {
        return null;
    }
}

class ConstructorUnTyped {
    constructor(type) {

    }
}

function anotherNoTypesFn(a, b) {
    return b;
}

function forInFn(): void {
    for (var p in []) {}
}

function spreadFunction(...n) : number {
  return ns[0];
}

class NoReturnTypeForSetAccessor {
    set name(value: string) {
    }
}

try {
    return 123;
} catch (e) { // should not be a failure; catch clause can't have typedef
    console.log(e);
}
