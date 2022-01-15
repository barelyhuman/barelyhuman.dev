#!/bin/sh

goblin () {
  curl -sf "https://goblin.reaper.im/$1@$2" | sh 
}

goblin barelyhuman/statico c7fe03387b5d4958029beb8a447344747a31dafc

statico