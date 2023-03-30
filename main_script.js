async function cal_data() {
    const form_ele = document.forms.data;
    const form_data = new FormData(form_ele);

    if (form_data.get("radius") == null || form_data.get("radius") == "" || form_data.get("mass") ==null || form_data.get("mass") == "")
    {
        alert("Enter Valid Values.")
    }
    else
    {
        orb_per();
        orb_vel();
        orb_acc()
    }
}

// Orbit Period
async function orb_per() {
    const form_ele = document.forms.data;
    const form_data = new FormData(form_ele);

    let x = await divi_p(form_data.get("radius"), form_data.get("mass"));
    let ans = Math.sqrt(x);

    document.getElementById("orb_per").innerText = ans;
}

async function divi_p(radius, mass_at_c) {
    let x = await neu_p(radius);
    let y = await den_p(mass_at_c);

    return x / y;
}

async function neu_p(radius) {
    const pi = 3.142;
    return 4 * (pi**2) * (radius**3);
}

async function den_p(mass_at_c) {
    const gra_const = 6.67408 * (10**-11);

    return gra_const * mass_at_c;
}

// Orbit Velocity
async function orb_vel() {
    const form_ele = document.forms.data;
    const form_data = new FormData(form_ele);

    let x = await divi_v(form_data.get("radius"), form_data.get("mass"));
    let ans = Math.sqrt(x);
    await orb_acc(ans, form_data.get("radius"));

    document.getElementById("orb_vel").innerText = ans;
}

async function divi_v(radius, mass_at_c) {
    let x = await neu_v(mass_at_c);

    return x / radius;
}

async function neu_v(mass_at_c) {
    const gra_const = 6.67408 * (10**-11);

    return gra_const * mass_at_c;
}

// Orbit Acceleration
async function orb_acc(velocity, radius) {
    let acc = (velocity**2) / radius;

    document.getElementById("orb_acc").innerText = acc;
}