// feetToMile Function
function feetToMile(feet)
{
    if(feet >= 0)
    {
        var mile = ( 1 / 5280 ) * feet;
        return mile;
    }
    else
    {
        var warning = "Distance can't be negative.";
        return warning;
    }
}

//woodCalculator Function
function woodcalculator(chair, table, bed)
{
    if(chair >= 0 && table >= 0 && bed >=0)
    {
        var chair = chair * 1;
        var table = table * 3;
        var bed = bed * 5;
        var totalWood = chair + table + bed;
        return totalWood;
    }
    else
    {
        var warning = "Inputs can't be negative.";
        return warning;
    }
}

//brickCalculator Function
function brickCalculator(numberOfFloors)
{
    if(numberOfFloors > 10)
    {
        var firstTenFloors = 10 * 15 * 1000;
        numberOfFloors = numberOfFloors - 10;
        if(numberOfFloors > 10)
        {
            var secondTenFloors = 10 * 12 * 1000;
            numberOfFloors = numberOfFloors - 10;
            var restOfTheFloors = numberOfFloors * 10 * 1000;
            var totalBricks = firstTenFloors + secondTenFloors + restOfTheFloors;
        }
        else
        {
            var restOfTheFloors = numberOfFloors * 12 * 1000;
            var totalBricks = firstTenFloors + restOfTheFloors;
        }

    }
    else
    {
        var totalBricks = numberOfFloors * 15 * 1000;
    }
    return totalBricks;
}

//tinyFriend Function
function tinyFriend(name)
{
    var tinyName = name[0];
    for(var i =0; i < name.length; i++)
    {
        var element = name [i];
        if(element.length < tinyName.length)
           {
               tinyName = element;
           }
    }
    return tinyName;
}