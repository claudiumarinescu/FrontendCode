/**
 * Created by Claudiu.Marinescu on 7/3/2017.
 */
hrApp.service('JobViewService', ['$http', 'CommonResourcesFactory',
    function ($http, CommonResourcesFactory) {
        return {
            findById: function (jobId) {
                return $http({
                    url: CommonResourcesFactory.findOneJobUrl + jobId,
                    method: 'GET',
                    //headers: {'Content-Type': 'application/json'}
                })

            }
            // findById: function (jobId) {
            //     return $http.get(CommonResourcesFactory.findOneJobUrl + jobId);
            // }
        }
    }]
);