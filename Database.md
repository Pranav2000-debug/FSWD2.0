## Q1. What is a Database? Explain with an example on why should we need a database?  
- A database is a structured and organized collection of data that is stored electronically in a computer system.  
A database is needed for -  
1. Effiecient data management: Storing, retrieval and manipulation of data.  
2. Data integrity and security: The code surrounding the database ensures consitency and security.
3. Scalability: As the business grows, so does the amount of data and so does the database along with it, withouth compromising performance.
4. Concurrency: Multiple users can access the database simultaneously without interfering with each other. (No deadlock)
5. Backup and Recovery: Databases provide robust backup and recovery solutions to protect data against loss or corruption.

## Q2. Write a short note on file base storage system. (Explain the major challenges of a File-based storage system)
- A file based storage system is a simple storage sytem that used to store and organize data and which follows a heirarchical strucutre. Each file is a collection of data stored in directories (or folders). Suitable for small scale applications with limited data management.  
> challenges in FBSS:-  
1 -Redundancy: Data is often duplicated in multiple files, leading to redundant data being stored. This can lead to some anomalies such as; read, write and update anomaly.  
2 -Security: Basic file level security is only present.  
3 -Difficult data access: since there is no structured query language to fetch data, retrieval of data from a large dataset will become harder with the existed retrieval methods used for files, such as direct access, indexed sequential acces.  
4 -No concurrency: only one user can access data at a time (can lead to deadlock).  
5 -Scalibility issue: Large datasets cannot be managed easily or stored.  

## Q3. What is DBMS? What was the need for DBMS?  
- A Database Management System (DBMS) is software that allows users to create, manage, and manipulate databases efficiently. It ensures data is organized, easily accessible, and consistently maintained.  
> Need for DBMS:-  
>> 1. Data Redundancy - Minimizes duplicate data. Ensures uniform updates.  
>> 2. Efficient Data Access - Uses SQL for fast data retrieval.  
>> 3. Data integrity and Security - Protects agains unauthorized access of DB.  
>> 4. Concurrent data access - multiple users can access the db simultaneously.  
>> 5. Data independence - Logical and Physical independence.  
>> 6. Scalibilty -  DBMS helps in handling growing data and information.  

## Q4. Explain 5 challenges of file-based storage system which was tackled by DBMS.  
 The 5 challenges that were tackled by DBMS for the FBSS are -  

> Data Redundancy and Inconsistency: Duplicate data stored in multiple files.

> Difficult Data Access: Complex and inefficient data retrieval methods.

> File-Based: Poor access control and concurrent access issues.  

> Concurrency Issues: Difficulties with simultaneous data access leading to conflicts.

> Backup and Recovery Challenges: Manual and error-prone backup processes.  

## Q5. What are the different types of classification in DBMS and explain them in depth?  
- By Data Model:  
1. Hierarchical Databases: Tree-like structure with parent-child relationships. Example: IBM's IMS.  
2. Network Databases: Graph structure allowing multiple parent-child relationships. Example: IDS.  
3. Relational Databases: Tables with rows and columns, connected through keys. Example: MySQL, Oracle.    
4. Object-Oriented Databases: Data as objects, integrating with object-oriented programming. Example: ObjectDB.  

- By DBMS Type:  
1. Centralized DBMS: Single location storage, accessed via a network.  
2. Distributed DBMS: Data spread across multiple sites, appearing as one database.
3. Parallel DBMS: Uses multiple processors for faster query execution.
By Usage:

- By User Access:  
1. Single-User DBMS: Access by one user at a time. Example: Microsoft Access.  
2. Multi-User DBMS: Simultaneous access by multiple users. Example: MySQL, Oracle.  

## Q6. What is the significance of Data Modeling and explain the types of data modeling?  
- Significance of Data Modeling:  
Data modeling is essential for designing databases and understanding the structure, relationships, and constraints of the data. It provides a blueprint for database development, aids in communication between stakeholders, ensures data integrity, and guides system implementation and maintenance.  
Types of Data Modeling:

Conceptual Data Modeling: Focuses on high-level business concepts and relationships, abstracting away technical details.

Logical Data Modeling: Defines the logical structure of the data, including entities, attributes, and relationships, independent of implementation.

Physical Data Modeling: Specifies the physical storage and optimization considerations, such as tables, indexes, and partitions, for efficient database implementation.

Dimensional Data Modeling: Used in data warehousing and analytics to model data for reporting and analysis, emphasizing facts, dimensions, and measures.

Object-Oriented Data Modeling: Represents data as objects with properties and methods, aligning with object-oriented programming principles.

## Q7. Explain 3 Schema Architecture along with its advantages.
3 Schema Architecture is a framework for organizing databases into three distinct layers: the External Schema, Conceptual Schema, and Internal Schema.

> External Schema:  
>> Definition: Represents the views of the database as seen by the end-users or applications.  
Advantages:  
Data Independence: Allows different users or applications to have customized views of the data without affecting the underlying structure.
Security: Enables access control by defining specific views for different users, ensuring data privacy and security.
Flexibility: Facilitates changes in user requirements or application interfaces without impacting the overall database design.  

>Conceptual Schema:  
>> Definition: Represents the logical structure of the entire database, including all entities, attributes, and relationships.  
Advantages:  
Unified Representation: Provides a comprehensive and consistent view of the entire database, facilitating understanding and management.
Data Integrity: Enforces integrity constraints and ensures data consistency across different applications or views.
Simplified Maintenance: Allows for changes in the database design without affecting external schemas, promoting easier maintenance and updates.  

> Internal Schema:  
>> Definition: Describes the physical storage and representation of data within the database system.  
Advantages:  
Optimization: Enables optimization of database performance through efficient storage structures, indexing, and access paths.
Security: Provides mechanisms for data encryption, compression, and access control at the storage level, enhancing data security.
Scalability: Supports scalability by allowing adjustments in storage configurations and allocation as the database grows.