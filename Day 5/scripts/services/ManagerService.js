/**
 * Created by Claudiu.Marinescu on 7/3/2017.
 */
hrApp.service('ManagerService', [
    function () {
        return {
            filterManagers: function (employees) {
                var managers = [];
                for (var i in employees) {
                    if (employees[i].managerId !== null) {
                        var found = false;
                        for (var j in managers) {
                            if (managers[j].managerId.employeeId === employees[i].managerId.employeeId) {
                                found = true;
                                break;
                            }
                        }
                        if (!found) {
                            managers.push(employees[i]);
                        }
                    }
                }
                return managers;
            }
        }
}]);