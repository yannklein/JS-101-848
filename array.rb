# ARRAY CRUD
students = ['Michelle', 'Raj', 'Hamish']

# Create
students << "Ethan"
students.push("Tyler")
p students

# Read
# p students.second # only Rails
p students[1]

# Update
students[0] = "Super Michelle"
p students

# Delete
students.delete_at(0)
students.delete('Raj')
p students

# Iterate
students.each do |student|
  puts "#{student} is amazing!"
end