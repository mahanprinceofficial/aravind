function login() {
    const user_id = document.getElementById('floatingInput').value;
    const password = document.getElementById('floatingPassword').value;

    // Sample input and output
    if (user_id === 'admin' && password === 'adminpass') {
        alert('Login successful. Redirecting to Admin Dashboard...');
        window.location.href = 'admin_dashboard.html';
    } else if (user_id === 'subadmin1' && password === 'subadminpass') {
        alert('Login successful. Redirecting to Subadmin1 Dashboard...');
        window.location.href = 'subadmin1_dashboard.html';
    } else if (user_id === 'subadmin2' && password === 'subadminpass') {
        alert('Login successful. Redirecting to Subadmin2 Dashboard...');
        window.location.href = 'subadmin2_dashboard.html';
    } else if (user_id === 'subadmin3' && password === 'subadminpass') {
        alert('Login successful. Redirecting to Subadmin3 Dashboard...');
        window.location.href = 'subadmin3_dashboard.html';
    } else if (user_id === 'subadmin4' && password === 'subadminpass') {
        alert('Login successful. Redirecting to Subadmin4 Dashboard...');
        window.location.href = 'subadmin4_dashboard.html';
    } else {
        alert('Invalid user name and password.');
    }
}