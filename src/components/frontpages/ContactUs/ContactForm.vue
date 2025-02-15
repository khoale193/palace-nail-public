<script setup lang="ts">
import {ref} from 'vue';

const select = ref('General Enquiry');
const items = ref(['General Enquiry', 'option 2', 'option 3', 'option 4']);

const selectRating = ref(1);

</script>
<template>
    <div class="py-12">
        <v-container class="max-width-1218">
            <v-row>
                <v-col cols="6" lg="6" md="12" sm="12">
                    <v-row>
                        <v-col cols="12">
                            <v-label class="mb-2 font-weight-medium">First Name *</v-label>
                            <v-text-field hide-details variant="outlined" placeholder="Name"
                                          color="primary"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-label class="mb-2 font-weight-medium">Last Name *</v-label>
                            <v-text-field hide-details variant="outlined" placeholder="Last Name"
                                          color="primary"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-label class="mb-2 font-weight-medium">Phone Number *</v-label>
                            <v-text-field hide-details variant="outlined" placeholder="xxx xxx xxxx"
                                          color="primary"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-label class="mb-2 font-weight-medium">Email *</v-label>
                            <v-text-field hide-details variant="outlined" placeholder="Email address "
                                          color="primary"></v-text-field>
                        </v-col>

                    </v-row>
                </v-col>
                <v-col cols="6" lg="6" md="12" sm="12">
                    <v-row>
                        <v-col cols="12">
                            <v-label class="mb-2 font-weight-medium">Dịch vụ bạn đã sử dụng *</v-label>
                            <v-select
                                v-model="select"
                                :items="items"
                                item-title="state"
                                item-value="abbr"
                                label="Select"
                                return-object
                                single-line
                                variant="outlined"
                                hide-details
                                multiple
                            ></v-select>
                        </v-col>
                        <v-col cols="12">
                            <v-row>
                                <v-col cols="6">
                                    <v-label class="mb-2 font-weight-medium">Nhân viên đã phục vụ bạn *</v-label>
                                    <v-select
                                        v-model="select"
                                        :items="items"
                                        item-title="state"
                                        item-value="abbr"
                                        label="Select"
                                        return-object
                                        single-line
                                        variant="outlined"
                                        hide-details
                                    ></v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-label class="mb-2 font-weight-medium">Rating</v-label>
                                    <v-rating hover color="warning" v-model="selectRating" class="ma-2"
                                              density="compact"></v-rating>
                                </v-col>
                            </v-row>
                        </v-col>

                        <v-col cols="12">
                            <v-label class="mb-2 font-weight-medium">Message</v-label>
                            <v-textarea label="Write your message here..." variant="outlined" hide-details></v-textarea>
                        </v-col>

                        <v-col cols="12">
                            <v-label class="mb-2 font-weight-medium">Rating</v-label>
                            <v-rating hover color="warning" v-model="selectRating" class="ma-2"
                                      density="compact"></v-rating>
                        </v-col>

                        <v-col cols="12 text-end">
                            <v-btn color="primary" class="h-43 px-5" flat href="" target="_blank">Submit</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
