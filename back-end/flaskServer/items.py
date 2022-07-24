## all routes related to items will go in here

from http.client import OK
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

## This functiong gets a request from the front-end and creates an item

@items.route('/createItem', methods=["POST"])
def createItem():
    itemName = request.json.get("name", None)
    itemPrice = request.json.get("startingPrice", None)
    newItem = Item(name=itemName, currHighestBid=itemPrice)
    db.session.add(newItem)
    db.session.commit()
    resp = jsonify(success=True)
    return resp

## This updates a bid for an item 

@items.route('/newBid', methods=["POST"])
def newBid():
    itemID = request.json.get('itemID')
    newPrice = request.json.get('newPrice')

    item = db.session.query(Item).filter_by(id=itemID).first()
    item.currHighestBid = newPrice
    db.session.commit()
