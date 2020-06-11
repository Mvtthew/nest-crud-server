import { Interface } from "readline";

import { Document } from 'mongoose';

export class Item extends Document {
	id?: string;
	name: string;
	description?: string;
	qty: number;
}