class employee{
    constructor(name, address, contact_number, nic, joined_date, designation, salary, arriveAt, leavesAt, lunch){
        this.nic = nic;
        this.address = address;
        this.contact_number = contact_number;
        this.designation = designation;
        this.joined_date = joined_date;
        this.name = name;
        this.salary = salary;
        this.arriveAt = arriveAt;
        this.leavesAt = leavesAt;
        this.lunch = lunch;
    }

    ArTime(){console.log(`Arrives at ${this.arriveAt}`)}
    OfTime(){console.log(`Arrives at ${this.leavesAt}`)}
}

class permanent extends employee{
    constructor(empNo, name, address, contact_number, nic, date, designation, salary, arriveAt, leavesAt){
        super(empNo, name, address, contact_number, nic, date, designation, salary, arriveAt, leavesAt);
    }

    requestExtension(days) {
        console.log(`Requesting an extension of contract ${days}.`);
    }
}

class temporary extends employee{
    duration = 6;
    
    constructor(empNo, name, address, contact_number, nic, date, designation, salary, arriveAt, leavesAt){
        super(empNo, name, address, contact_number, nic, date, designation, salary, arriveAt, leavesAt);
    }
}

class contract extends employee{
    duration = 12;

    constructor(empNo, name, address, contact_number, nic, date, designation, salary, arriveAt, leavesAt){
        super(empNo, name, address, contact_number, nic, date, designation, salary, arriveAt, leavesAt);
    }
    requestExtension(days) {
        console.log(`Requesting an extension of contract ${days}.`);
    }
}