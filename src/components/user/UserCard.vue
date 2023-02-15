<script lang="ts" setup>
import Widgets from "../../Widgets"; const {UserField} = Widgets.items
import {useStore} from "@nanostores/vue";
import {user} from "../../store/user.store";

const $user = useStore(user)
</script>

<template>
  <div class="w-[90%] py-10 mx-auto h-full">
      <div class="bg-custom-dark-purple p-4 cut-right-bottom-small h-[200px]">
          <div class="flex h-full justify-between w-[95%] gap-x-3">
              <div class="h-full">
                  <div class="w-full h-full">
                      <img :src="$user.image" alt="image" class="w-full h-full"/>
                  </div>
              </div>
              <div class="h-full flex flex-col justify-between divide-custom-dark-purple divide-y-2 bg-custom-midnight flex-auto px-4 text-custom-gray">
                  <UserField label="username:" :value="$user.nickname" class="pt-0"/>
                  <UserField label="name:" :value="$user.name" />
                  <UserField label="joined:" :value="$user.joinData" />
              </div>
          </div>
      </div>
  </div>
</template>