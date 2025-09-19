var objUsingLiteral1 = {
    name: "name",
    age: 20,
    isActive: true,
    calculate: function() {
        return this.age * 2
    }
}

var objUsingNewObject1 = new Object({
    name: "name",
    age: 20,
    isActive: true,
    calculate: function() {
        return this.age * 2
    }
});

// modifies the target too, here {age: 30}
var objUsingAssign = Object.assign({age: 30}, objUsingNewObject1);

// now if left changes anything, right also changes
// pass by reference
var objUsingLiteral1 = objUsingNewObject1;

var objUsingCreate1 = {
    name: "name",
    age: 20,
    isActive: true,
    calculate: function() {
        return this.age * 2
    }
}

var objUsingCreate2 = Object.create(objUsingCreate1);
