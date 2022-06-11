# p "Hello 848s!".class

# p 42.to_s
# p "42".to_i

# student = "Raj"
# age = 21

# puts "#{student} is #{age} yrs-old."
# age += 1
# student = "Super Raj"
# puts "#{student} will be #{age} yrs-old next year."

# first_name = "jEnNy"

# p first_name.length
# # p first_name.count ARRAY ONLY
# p first_name.size 
# # p first_name.first ARRAY ONLY
# p first_name[0]
# p first_name[0..2]
# p first_name.slice(0,3) # from index 0, three characters
# p first_name.slice(1) # only one char
# p first_name[1..]

# p first_name.upcase
# p first_name.downcase
# p first_name.capitalize

student_string =  "Ethan, Jonathan, Tyler, Ashish, Zach"
students = student_string.split(", ")
p students

student_string =  "Ethan Jonathan Tyler Ashish Zach"
students = student_string.split
p students

p students.join
p students.join(", ")