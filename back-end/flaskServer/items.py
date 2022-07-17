## all routes related to items will go in here

from flask import Flask, Blueprint, request, jsonify
from .models import Item
from . import db

import json

## create the items Blueprint. This is registered with out app in our __init.py__ file

items = Blueprint('items', __name__)

## create the route with the function getItems. This will return all items.

@items.route('/items', methods=["GET"])
def getItems():
    items = Item.query.all()
    for idx, i in enumerate(items):
        items[idx] = i.as_dict()
    return jsonify(items)

## This function will return all the info on one item.
## We parse the url parameter and query and find

@items.route('/seeItem', methods=["GET"])
def seeItem():
    itemID = request.args.get('id')
    item = Item.query.filter_by(id=itemID).first()
    return jsonify(item.as_dict())

## create more item related routes/functions here