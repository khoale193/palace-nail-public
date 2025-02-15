<script setup lang="ts">
import { FooterMenu1, FooterMenu2, FooterMenu3 } from '@/_mockApis/front-pages/PagesData';
</script>

<template>
    <div class="space-p-96">
        <v-container class="max-width-1218">
            <v-row>
                <v-col cols="12" lg="3" sm="6">
                    <h5 class="text-17 textPrimary mb-sm-7 mb-6">Explore</h5>
                    <div class="d-flex flex-column ga-4">
                        <div v-for="item in FooterMenu1" :key="item.menu">
                            <!--<v-btn variant="text" :href="item.link" target="_blank" class="text-hover-primary link-btn opacity-80">
                                {{ item.menu }}
                            </v-btn>-->
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" lg="3" sm="6">
                    <h5 class="text-17 textPrimary mb-sm-7 mb-6">Features</h5>
                    <div class="d-flex flex-column ga-4">
                        <div v-for="item in FooterMenu2" :key="item.menu">
                            <!--<v-btn variant="text" :href="item.link" target="_blank" class="text-hover-primary link-btn opacity-80">
                                {{ item.menu }}
                            </v-btn>-->
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" lg="3" sm="6">
                    <h5 class="text-17 textPrimary mb-sm-7 mb-6">Resources</h5>
                    <div class="d-flex flex-column ga-4">
                        <div v-for="item in FooterMenu3" :key="item.menu">
                            <!--<v-btn variant="text" :href="item.link" target="_blank" class="text-hover-primary link-btn opacity-80">
                                {{ item.menu }}
                            </v-btn>-->
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" lg="3" sm="6">
                    <h5 class="text-17 textPrimary mb-sm-7 mb-6">Follow Palace Nail Spa</h5>
                    <div class="d-flex ga-5 opacity-90 social-icon">
                        <v-btn variant="text" href="https://www.facebook.com/profile.php?id=100083091861063" target="_blank" class="link-btn">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_21817_22409)">
                                    <path
                                        d="M22 11C22 4.92422 17.0758 0 11 0C4.92422 0 0 4.92422 0 11C0 16.1562 3.55352 20.4875 8.34453 21.6777V14.3602H6.07578V11H8.34453V9.55195C8.34453 5.80938 10.0375 4.07344 13.7156 4.07344C14.4117 4.07344 15.6148 4.21094 16.109 4.34844V7.39062C15.8512 7.36484 15.4 7.34766 14.8371 7.34766C13.0324 7.34766 12.3363 8.03086 12.3363 9.80547V11H15.9285L15.3098 14.3602H12.332V21.9184C17.7805 21.2609 22 16.6246 22 11Z"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_21817_22409">
                                        <rect width="22" height="22" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <v-tooltip activator="parent" location="top">Palace Nail Spa's Facebook</v-tooltip>
                        </v-btn>
                        <v-btn variant="text" href="https://www.instagram.com/palace_nails_219" target="_blank" class="link-btn">
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_21817_22413)">
                                    <path
                                        d="M9.62959 6.0583C6.89678 6.0583 4.69248 8.2626 4.69248 10.9954C4.69248 13.7282 6.89678 15.9325 9.62959 15.9325C12.3624 15.9325 14.5667 13.7282 14.5667 10.9954C14.5667 8.2626 12.3624 6.0583 9.62959 6.0583ZM9.62959 14.2052C7.86357 14.2052 6.41982 12.7657 6.41982 10.9954C6.41982 9.2251 7.85928 7.78564 9.62959 7.78564C11.3999 7.78564 12.8394 9.2251 12.8394 10.9954C12.8394 12.7657 11.3956 14.2052 9.62959 14.2052ZM15.9202 5.85635C15.9202 6.49658 15.4046 7.00791 14.7687 7.00791C14.1284 7.00791 13.6171 6.49229 13.6171 5.85635C13.6171 5.22041 14.1327 4.70478 14.7687 4.70478C15.4046 4.70478 15.9202 5.22041 15.9202 5.85635ZM19.1901 7.0251C19.1171 5.48252 18.7647 4.11611 17.6347 2.99033C16.5089 1.86455 15.1425 1.51221 13.5999 1.43486C12.0101 1.34463 7.24482 1.34463 5.65498 1.43486C4.1167 1.50791 2.75029 1.86025 1.62024 2.98604C0.490137 4.11182 0.14209 5.47822 0.0647461 7.0208C-0.0254883 8.61064 -0.0254883 13.3759 0.0647461 14.9657C0.137793 16.5083 0.490137 17.8747 1.62024 19.0005C2.75029 20.1263 4.1124 20.4786 5.65498 20.556C7.24482 20.6462 12.0101 20.6462 13.5999 20.556C15.1425 20.4829 16.5089 20.1306 17.6347 19.0005C18.7605 17.8747 19.1128 16.5083 19.1901 14.9657C19.2804 13.3759 19.2804 8.61494 19.1901 7.0251ZM17.1362 16.6716C16.8011 17.5138 16.1522 18.1626 15.3058 18.5021C14.0382 19.0048 11.0304 18.8888 9.62959 18.8888C8.22881 18.8888 5.2167 19.0005 3.95342 18.5021C3.11123 18.1669 2.4624 17.5181 2.12295 16.6716C1.62024 15.404 1.73623 12.3962 1.73623 10.9954C1.73623 9.59463 1.62451 6.58252 2.12295 5.31924C2.45811 4.47705 3.10693 3.82822 3.95342 3.48877C5.221 2.98603 8.22881 3.10205 9.62959 3.10205C11.0304 3.10205 14.0425 2.99033 15.3058 3.48877C16.148 3.82393 16.7968 4.47275 17.1362 5.31924C17.639 6.58682 17.5229 9.59463 17.5229 10.9954C17.5229 12.3962 17.639 15.4083 17.1362 16.6716Z"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_21817_22413">
                                        <rect width="19.25" height="22" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <v-tooltip activator="parent" location="top">Palace Nail Spa's Instagram</v-tooltip>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <v-container class="max-width-1218 px-md-0 px-3 py-0">
        <div class="py-sm-10 py-6 border-t">
            <div class="d-sm-flex justify-space-between">
                <div class="d-flex ga-2 text-15 opacity-80 justify-sm-start justify-center">
                    <img src="@/assets/images/logos/sample.png" height="24" class="mx-2" alt="logo" />
                    All rights reserved by Palace Nail.
                </div>
                <p class="text-15 opacity-80 d-flex align-center justify-sm-end justify-center pt-sm-0 pt-2">
                    <!--Produced by <v-btn
                        variant="text"
                        color="primary"
                        href="https://adminmart.com/"
                        target="_blank"
                        class="text-hover-primary link-btn text-15 ms-1"
                    >AdminMart.</v-btn>-->
                </p>
            </div>
        </div>
    </v-container>
</template>
