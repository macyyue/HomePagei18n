<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref, watch, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { userRegisterService, userLoginService } from '@/api/user.js'
import { useTokenStore } from '@/stores/token.js';
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n';

// 使用国际化
const { t, locale } = useI18n();

//控制注册与登录表单的显示， 默认显示注册
const isRegister = ref(false)

// 创建表单的引用
const registerFormRef = ref(null);
const loginFormRef = ref(null);

//定义数据模型
const registerData = ref({
    username: '',
    password: '',
    rePassword: ''
})

//校验密码的函数
const checkRePassword = (rule, value, callback) => {
    if (value === '') {
        callback(new Error(t('validation.rePassword.required')))
    } else if (value !== registerData.value.password) {
        callback(new Error(t('validation.rePassword.mismatch')))
    } else {
        callback()
    }
}

//清空数据模型的数据
const clearRegisterData = () => {
    registerData.value = {
        username: '',
        password: '',
        rePassword: ''
    }
}

//生成表单校验规则
const generateRules = () => ({
    username: [
        { required: true, message: t('validation.username.required'), trigger: 'blur' },
        { min: 5, max: 16, message: t('validation.username.length'), trigger: 'blur' },
    ],
    password: [
        { required: true, message: t('validation.password.required'), trigger: 'blur' },
        { min: 5, max: 16, message: t('validation.password.length'), trigger: 'blur' },
    ],
    rePassword: [
        { validator: checkRePassword, trigger: 'blur' }
    ]
});

//规则引用
const rules = ref(generateRules());

//调用后台接口，完成注册
const register = async () => {
    let result = await userRegisterService(registerData.value);
    ElMessage.success(result.msg ? result.msg : t('validation.registerSuccess'))
}

//登录函数
const router = useRouter()
const tokenStore = useTokenStore();
const login = async () => {
    let result = await userLoginService(registerData.value);
    ElMessage.success(result.msg ? result.msg : t('validation.loginSuccess'))

    //把得到的token存储到pinia中
    tokenStore.setToken(result.data)
    //借助于路由跳转到首页
    router.push('/')
}

//国际化
const changeLang = (lang) => {
    locale.value = lang;
    localStorage.setItem('lang', lang);
    // 清除校验状态
    clearFormValidate();

}

// 清除表单校验状态
const clearFormValidate = () => {
    if (isRegister.value) {
        console.log('Clearing validation state for register form...');
        registerFormRef.value?.clearValidate();
    } else {
        console.log('Clearing validation state for login form...');
        loginFormRef.value?.clearValidate();
    }
};

// 添加一个标志来指示是否需要更新校验规则
const needUpdateRules = ref(false);

watch(locale, (newVal, oldVal) => {
    if (newVal !== oldVal) {
        console.log('Locale changed. Rules will be updated when interacting with the form.');
        needUpdateRules.value = true; // 设置标志为 true，表示需要更新规则

    }
});

onMounted(() => {
    updateRulesIfNeeded();
});

// 在用户与表单交互时检查是否需要更新规则，并在需要时更新
const updateRulesIfNeeded = () => {
    if (needUpdateRules.value) {
        rules.value = generateRules(); // 更新规则
        needUpdateRules.value = false; // 标志复位
    }
};

// 或者在表单元素的交互事件中调用它，例如在输入框失去焦点时调用
const handleInputBlur = () => {
    console.log('Input blurred. Performing validation...');
    updateRulesIfNeeded();
};

</script>
<template>
    <div class="mainContent">
        <el-row class="login-page">
            <el-col :span="12" class="bg"></el-col>
            <div class="language">
                <el-dropdown trigger="click">
                    <el-button class="language-btn">
                        <span id="earth-icon"></span>
                        {{ $t('Login.language') }}
                    </el-button>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="changeLang('jp')">
                                日本語
                            </el-dropdown-item>
                            <el-dropdown-item @click="changeLang('en')">
                                ENGLISH
                            </el-dropdown-item>
                            <el-dropdown-item @click="changeLang('zh')">
                                简体中文
                            </el-dropdown-item>
                            <el-dropdown-item @click="changeLang('zhf')">
                                繁體中文
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <el-col :span="6" :offset="3" class="form">
                <!-- 注册表单 -->
                <el-form ref="registerFormRef" size="large" autocomplete="off" v-if="isRegister" :model="registerData"
                    :rules="rules">
                    <el-form-item>
                        <h1>{{ $t('Login.Register') }}</h1>
                    </el-form-item>
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" :placeholder="t('validation.username.PlaceUseName')"
                            @blur="handleInputBlur" v-model="registerData.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input :prefix-icon="Lock" type="password" :placeholder="t('validation.password.PlacePw')"
                            @blur="handleInputBlur" v-model="registerData.password"></el-input>
                    </el-form-item>
                    <el-form-item prop="rePassword">
                        <el-input :prefix-icon="Lock" type="password" :placeholder="t('validation.rePassword.required')"
                            @blur="handleInputBlur" v-model="registerData.rePassword"></el-input>
                    </el-form-item>
                    <!-- 注册按钮 -->
                    <el-form-item>
                        <el-button class="button" type="primary" auto-insert-space @click="register">
                            {{ $t('Login.Register') }}
                        </el-button>
                    </el-form-item>
                    <el-form-item class="flex">
                        <el-link type="info" :underline="false" @click="isRegister = false; clearRegisterData()">
                            ← {{ $t('Login.GoBack') }}
                        </el-link>
                    </el-form-item>
                </el-form>

                <!-- 登录表单 -->
                <el-form ref="loginFormRef" size="large" autocomplete="off" v-else :model="registerData" :rules="rules">
                    <el-form-item>
                        <h1>{{ $t('Login.LoginBut') }}</h1>
                    </el-form-item>
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" :placeholder="t('validation.username.PlaceUseId')"
                            @blur="handleInputBlur" v-model="registerData.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input name="password" :prefix-icon="Lock" type="password" @blur="handleInputBlur"
                            :placeholder="t('validation.password.PlacePw')" v-model="registerData.password"></el-input>
                    </el-form-item>
                    <el-form-item class="flex">
                        <div class="flex">
                            <el-checkbox>{{ $t('Login.PwSave') }}</el-checkbox>
                            <router-link to="/PwForgot">
                                <el-link type="primary" :underline="false">{{ $t('Login.PwForgot') }}</el-link>
                            </router-link>
                        </div>
                    </el-form-item>
                    <!-- 登录按钮 -->
                    <el-form-item>
                        <el-button class="button" type="primary" auto-insert-space @click="login">{{
                            $t('Login.LoginBut') }}
                        </el-button>
                    </el-form-item>
                    <el-form-item class="flex">
                        <el-link type="info" :underline="false" @click="isRegister = true; clearRegisterData()">
                            {{ $t('Login.GoRegister') }} →
                        </el-link>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss" scoped>
.mainContent {
    min-width: 1390px;
}

.login-page {
    height: 100vh;
    background-color: #fff;

    .bg {
        background: url('@/assets/image/LoginPage/Login.svg') no-repeat 50% center / 280px auto,
            url('@/assets/image/LoginPage/img10.jpg') no-repeat center / cover;
        border-radius: 0 20px 20px 0;
    }

    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        user-select: none;

        .title {
            margin: 0 auto;
        }

        .button {
            width: 100%;
        }

        .flex {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
}

#earth-icon {
    float: right;
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
    background-image: url(@/assets/image/HomePage/earth.svg);
    vertical-align: middle;
}

.language {
    position: absolute;
    top: 10px;
    right: 10px;
}

.language-btn {
    background-color: #409eff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
}

.language-btn:hover {
    background-color: #66b1ff;
}
</style>