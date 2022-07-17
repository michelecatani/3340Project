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

## create more item related routes/functions here