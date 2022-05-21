---
to: src/services/<%= service %>/<%= service %>.model.ts
---
import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize/types";
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

interface <%= model %>Model extends Model<InferAttributes< <%= model %>Model>, InferCreationAttributes< <%= model %>Model>> {}

const <%= model %> = sequelize.define< <%= model %>Model>('<%= model %>', {});

// `sequelize.define` also returns the model
console.log(<%= model %> === sequelize.models.<%= model %>); // true