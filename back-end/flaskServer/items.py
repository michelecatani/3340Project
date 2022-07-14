## all routes related to items will go in here

from flask import Flask, Blueprint, request, jsonify
from .models import Item
from . import db

## create the items Blueprint. This is registered with out app in our __init.py__ file

items = Blueprint('items', __name__)

## create the route with the function getItems. This will return all items.

items.route('/catalogue', methods=["POST", "GET"])
def getItems():
    itemList = Item.query.all()
    return jsonify(itemList)

## create more item related routes/functions here