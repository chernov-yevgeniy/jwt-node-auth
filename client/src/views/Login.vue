<template>
    <d-container fluid class="main-content-container container-fluid h-100">
        <div class="row h-100 no-gutters">
            <div class="auth-form mx-auto my-auto col-md-4 col-lg-2">
                <div class="card">
                    <div class="card-body">
                        <!---->
                        <!---->
                        <img src="https://designrevision.com/demo/shards-dashboard-vue/img/shards-dashboards-logo.60a85991.svg"
                            alt="Shards Dashboards - Login Template"
                            class="auth-form__logo d-table mx-auto mb-3">
                        <h5 class="auth-form__title text-center mb-4">Access Your Account</h5>
                        <form class="">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input id="exampleInputEmail1" type="email" placeholder="Enter email"
                                    class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input id="exampleInputPassword1" type="password" placeholder="Password"
                                    class="form-control"></div>
                            <div class="form-group mb-3 d-table mx-auto">
                                <label class="custom-control custom-checkbox">
                                    <input type="checkbox" autocomplete="off"
                                        id="dr-checkbox-b407e8d8-94ca-4528-8757-255438848160"
                                        true-value="orange" class="custom-control-input" value="orange">
                                    <label for="dr-checkbox-b407e8d8-94ca-4528-8757-255438848160"
                                        aria-hidden="true" class="custom-control-label"></label>
                                    <span class="custom-control-description">Remember me for 30 days.</span>
                                </label>
                            </div>
                            <button type="submit" class="btn btn-pill btn-accent d-table mx-auto">Access
                                Account</button>
                        </form>
                    </div>
                </div>
                <div class="auth-form__meta d-flex mt-4">
                    <a href="/demo/shards-dashboard-vue/forgot-password" class="" target="_self">Forgot your
                        password?</a><a href="/demo/shards-dashboard-vue/register" class="ml-auto"
                        target="_self">Create a new account?</a></div>
            </div>
        </div>
    </d-container>
</template>
